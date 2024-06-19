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