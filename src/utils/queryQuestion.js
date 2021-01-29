export default function (data, query) {
    
    let formatDate = (string) => {
        let queue = string.split('/');
        return queue[2] + '-' + queue[0] + '-' + queue[1];
    }

    if (query.date) {
        let dataName = data.filter((item) =>
        (
            item.name.indexOf(query.name) !== -1 && 
            item.type.indexOf(query.type) !== -1 && 
            item.status.indexOf(query.status) !== -1) && 
            new Date(formatDate(item.duedate))<=new Date(query.date)
        );
            return dataName ? dataName :'';
    } else {
        let dataName = data.filter((item) =>
            (
                item.name.indexOf(query.name) !== -1 &&
                item.type.indexOf(query.type) !== -1 &&
                item.status.indexOf(query.status) !== -1));
            return dataName ? dataName :'';
    }
}
