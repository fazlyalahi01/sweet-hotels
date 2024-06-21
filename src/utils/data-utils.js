import moment from "moment"

export const replaceMongoIdInArray = (array) => {
    const newArray = array.map((el) => {
        return { ...el, id: el._id.toString() }
    }).map(({ _id, ...rest }) => rest)
    return newArray
}

export const replaceMongoIdInObject = (obj) => {
    const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() }
    return updatedObj;
}
export const isDateInbetween = (date, start, end) => {
    return moment(date).valueOf() >= moment(start).valueOf() && moment(date).valueOf() <= moment(end).valueOf()
}

export const getDayCountFromDate = (from, to) => {
    console.log(from)
    console.log(to)
    return moment(to).diff(moment(from), 'days') + 1;
}