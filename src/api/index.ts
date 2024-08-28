import { Employee } from "@/schema";
import axios from "axios";
import { SERVER } from "./constants";

const client = axios.create({
    baseURL: SERVER,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        // "Authorization" : `Bearer ${token}`
    }
  });

export const fetchEmployeesAPI = async () => {
    try {
        const res = await client.get(
          SERVER + '/get-all',
        );

        // const flattenedData = flattenResponse(res.data);
        // return flattenedData;
        return res.data as Employee[];
      } catch (err:any) {
        console.log('an error occured:', err.message);
      }
}

export const fetchEmployeeByIdAPI = async (id: string) => {
    try {
        const res = await client.get<Employee>(
          `/get-by-id/${id}`, 
        );
        return res.data;
      } catch (err:any) {
        console.log('an error occured:', err.message);
      }
}

export const createEmployeeAPI = async (employee: Employee) => {
    try {
        const res = await client.post(
          `/create`,
          employee
        );
        return res.data as { id: string };
      } catch (err:any) {
        console.log('an error occured:', err.message);
      }
}

export const updateEmployeeAPI = async (id: string, employee: Employee) => {
    try {
        const res = await client.put(
          `/update/${id}`,
          employee
        );
        return res.data as { message: string };
      } catch (err:any) {
        console.log('an error occured:', err.message);
      }
}

export const deleteEmployeeAPI = async (id: string) => {
    try {
        const res = await client.delete(
          `/delete/${id}`,
        );
        return res.data as { message: string };
      } catch (err:any) {
        console.log('an error occured:', err.message);
      }
}

export function flattenResponse(rawData: Employee[]) {
    const newData = rawData.map((row) => ({ id: row.id, ...row }));
  
    return newData;
  }