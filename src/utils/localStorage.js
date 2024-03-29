export const getData = () => {
    const data = localStorage.getItem('donation')
    if (data)
        return JSON.parse(data)
    return [];
}
export const storeData = data => {
    const savedData = getData();
    const isExists = savedData.find(item => item.id == data.id);
    if (!isExists) {
        savedData.push(data);
        localStorage.setItem('donation', JSON.stringify(savedData));
        return true
    }
    return false;
}