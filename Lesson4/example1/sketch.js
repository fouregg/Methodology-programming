function introductionMassive()
{
    let mass = [10, 2, 3, 5, 7];
    console.log(mass.length); // length - длина массива
    
    console.log(mass);
    // pop() - функция, которая удаляет последний элемент из массива 
    // и при этом возвращает этот элемент на место вызова
    console.log(mass.pop()); 
    console.log(mass);
    
    // push(element) - функция, которая добавляет element в конец списка
    console.log(mass.push(25));
    console.log(mass);
    
    // pop() - функция, которая удаляет первый элемент из массива 
    // и при этом возвращает этот элемент на место вызова
    console.log(mass.shift());
    console.log(mass);
    
    // indexOf(element) - функция, которая возвращает позицию первого элемент, который равен значению element
    console.log(mass.push(5));
    console.log(mass.indexOf(5));
}

function introductionLoop() 
{
    let i = 0;
    // while(condition) -> цикл "пока", он удобен для использования когда количество шагов не определено заранее
    // Например обработка пользовательского ввода (пока пользователь не введет число) или для структур данных, которые
    // будут обходится не до конца, а до какого-то условия
    while(i < 20) 
    {
        console.log(i);
        i = i + 1;
    }
    // do{} while(condition) -> цикл "пока" с постусловием. Единственное отличие это то, что проверка продолжения цикла
    // выполняется в конце, а не в начале. То есть гарантируется хотябы одиночное выполнение тела цикла, даже если
    // условие не подходит 
    i = 35;  
    do{
        console.log(i);
        i = i + 1;
    } while(i < 20);
    
    // for(init; condition; iteration) -> цикл for, отлично подходит для обхода структур данных. 
    // Например строк или массивов. 
    // init - это место, где инициализируется или объявляется переменная. Начало цикла.
    // condition - условие определяющее до какого момента будет двигаться цикл. Конец цикла.
    // iteration - смещение переменной, на какое-то значение. Шаг цикла
    
    let mass = [10, 2, -3, 5, 6];
    
    for(let i = 0; i < mass.length; i++) // i = 0 - init; i < mass.length - condition; i++ - iteration; 
        console.log(mass[i]); // Через квадратные скобки, получаем доступ к элементу коллекции массив
    
    let input = "Мама мыла раму, папа читал газету";
    for(let i = 0; i < input.length; i++)
        console.log(input[i]);
}

function advancedMassive()
{
    let mass = [2, 3, "Мама", [10, -2]];
    // Все структуры данных, у которых можно получить доступ по номеру элемента, начинают свой отсчет от 0. 
    console.log(mass[0]/* 2 */, mass[1] /* 3 */, mass[2], mass[3]);
    
    
    mass = [10, 2, 3, 5, -10, -20, 7];
    
    // Фильтрация только положительных элементов вручную
    let tmp = [];
    for (let i = 0; i < mass.length; i++)
        if (mass[i] > 0)
            tmp.push(mass[i]);
    console.log(tmp);
    
    // Фильтрация только положительных элементов с помощью filter
    // filter(function(el)) - функция, которая фильтрует элементы по определенной логике, которая определена в
    // передаваемой функции в качестве аргумента. Такая функция обязательна должна содержать в себе аргумент, 
    // который будет являться элементом, для которого применяется логика фильтрации. Функция должна возвращать
    // true - если элемент подходит, false - если элемент не подходит
    console.log(mass.filter(function(element){return element > 0;}));
    //console.log(mass.filter((element) => element > 0)); короткое решение использующее стрелочные функции
    mass = tmp;
    // Поиск максимума, минимум, суммы
    let customMax = mass[0], customMin = mass[0], customSum = 0;
    for (let i = 0; i < mass.length; i++)
    {
        if (mass[i] > customMax)
            customMax = mass[i];
        if (mass[i] < customMin)
            customMin = mass[i];
        customSum += mass[i];
    }
    console.log(customMax, customMin, customSum);    
    
    // ... - это специальный оператор JS, который расспаковывает структуру данных, и вытаскивает значения
    // как отдельные переменные
    console.log(Math.max(10, 20, 30, 2, 5));
    console.log(`Максимальный элемент в массиве: ${Math.max(...mass)}, ` +  
                `Минимальный элемент в массиве: ${Math.min(...mass)}`);
    // reduce(functon()) - это метод, который позволяет использовать функцию с двумя параметрами:
    // аккумулятор, который будет накапливать значения и элемент, который будет обрабатываться 
    console.log(mass.reduce(function(sum, element){return sum + element;}));
    
    let input = "Мама мыла раму, папа читал газету";
    // split(spliter) - делит строку на массив строк, где разделителем между элементами будет spliter
    let words = input.split(" ");
    console.log("Количество слов:" + words.length); // Первый вариант интеграции переменной к строковому литералы
    
    // Посчитать количество гласных букв
    let vowels = ['а', 'о', 'э', 'е', 'и', 'ы', 'у', 'ё', 'ю', 'я'];
    let countVowels = 0;
    
    for (let i = 0; i < input.length; i++)
    {
        if (vowels.includes(input[i])) // includes(value) - функция, которя проверяет входит ли value в массив. 
            countVowels++;
    }
    console.log(`Количество гласных: ${countVowels}`);
    console.log('Сумма 2 + 3 = ' + (2 + 3) + ".");
    console.log(`Сумма 2 + 3 = ${2 + 3}.`);
}

function incrementDicrement()
{
    let i = 10;
    i++; // i = i + 1;  i += 1
    console.log(i);
    i--;
    console.log(i);
    
    console.log(i++); // Постфиксная форма записи выполняет инкремент в последнюю очередь после всех операций
    console.log(i);
    
    i = 10;
    console.log(++i); // Префиксная форма записи выполняет инкремент в первую очередь перед всеми операциями
}

incrementDicrement();