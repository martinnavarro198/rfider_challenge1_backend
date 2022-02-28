import sqlite3 from "sqlite3";
import { getItemByStringId } from "../models/ViewsModel";

export default class DatabaseService {
    static db = new sqlite3.Database('./rfider.db')

    static get = <Model>(id: string): Promise<Model[]> => {
        return new Promise((resolve, reject) => {
                DatabaseService.db.all(getItemByStringId(id), (error: any, result: Model[]) => {
                if (error) {
                    console.error(error)
                    reject(null)
                } else {
                    resolve(result)
                }
            })
        });
    }

    static query = <T>(data: T, queryBuilder: (data: T) => string): Promise<boolean> => {
        return new Promise((resolve, reject) => {
                DatabaseService.db.run(queryBuilder(data), (error: any, result: any) => {
                if (error) {
                    console.error(error)
                    reject(null)
                } else {
                    resolve(result)
                }
            })
        });
    }

}