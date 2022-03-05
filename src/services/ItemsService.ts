import moment from "moment";
import  { ItemModel, getItemByStringId, increaseViews, resetViews } from "../models/ViewsModel";
import DatabaseService from "./DatabaseService";

export default class ItemsService {

    static async getViews(itemId: string): Promise<number> {
        const items = await DatabaseService.get<ItemModel>(itemId)
        return items[0].views
    }

    static async increaseView(itemId: string) {
        const items = await DatabaseService.get<ItemModel>(itemId)
        const dateDay = moment(items[0].last_view_date).format('D');
        const todayDay = moment().format('D')
    
        if (dateDay !== todayDay) {
            await DatabaseService.query<string>(itemId, resetViews)
        } else {
            await DatabaseService.query<string>(itemId, increaseViews)
        }
        return Promise.resolve('Ok')
    }
}