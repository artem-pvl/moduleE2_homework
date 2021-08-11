let mapObj = new Map(
    [
        [1, 'one'],
        [2, 2333],
        ['go', true]
    ]
);

mapObj.forEach((value, key) => console.log(`Ключ - ${key}, значение - ${value}`))
