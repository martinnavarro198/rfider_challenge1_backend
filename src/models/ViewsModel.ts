export interface ItemModel {
    item_id: string,
    last_view_date: string,
    views: number
}

export const increaseViews = (item_id: string) => {
    return `UPDATE item_views SET views = views + 1 WHERE item_id = '${item_id}'`
}

export const resetViews = (item_id: string) => {
    return `UPDATE item_views SET views = 0 WHERE item_id = '${item_id}'`
}

export const getItemByStringId = (item_id: string) => {
    return `SELECT * FROM item_views WHERE item_id = '${item_id}'`
}

