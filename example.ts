// TODO: divide 라고 하는 함수를 만들고
// TODO: Item 이라고 하는 커스텀 타입을 만들어서
// TODO: 이 item의 타입에 따라, 그리고 어떤 값인지에 따라
// TODO: 각각의 값을 구분하여 console.log()로 출력하는 함수를 만들어보세요
// ? enum 타입 활용, switch문 활용

enum Item {
  BAG = 'bag',
  GUN = 'gun',
  BULLET = 'bullet',
}

const divide = (item: Item) => {
  // TODO: switch문을 활용하여 각각의 item에 따라 다른 메세지를 출력하도록 작성하세요
  switch (item) {
    case Item.BAG:
      console.log('bag');
      break;
    case Item.GUN:
      console.log('gun');
      break;
    case Item.BULLET:
      console.log('bullet');
      break;
  }
};

//divide(Item.BULLET);

// TODO: SimpleUser라고 하는 객체 타입을 만들고, 필드는 name(이름), age(나이)
// TODO: logUser라는 함수를 만들어서 SimpleUser 타입의 인자를 받고
// TODO: name과 age를 console.log로 출력하는 함수를 만드세요
// TODO: 최소 3명 이상의 simple 사용자를 만들어서 반복적으로 logUser 함수를 호출하도록 작성하세요

interface SimpleUser {
  name: string;
  age: number;
}

const logUser = (user: SimpleUser) => {
  console.log(`name: ${user.name}, age: ${user.age}`);
};

const users: SimpleUser[] = [
  { name: 'userA', age: 20 },
  { name: 'userB', age: 30 },
  { name: 'userC', age: 40 },
  { name: 'userD', age: 50 },
  { name: 'userE', age: 60 },
];

//users.forEach(logUser);

// TODO: 타입스크립트 실습 문제1
// TODO: dayjs 를 활용한 날짜 포맷 함수를 만들어야 합니다. 함수 이름은 formatDate() 로 하고
// TODO: Date 타입의 값을 받아와서 ‘YYYY.MM.DD’ 형태로 날짜가 문자열로 포맷된 값으로 반환하게 되어야 합니다. (TS의 타입 부여가 잘 되어야 합니다.)
// TODO: 아래 someSchedule 객체의 각 날짜를 formatDate 함수로 포맷된 값으로 변경되도록 처리한 후 log로 띄어 확인해보세요.

import dayjs from 'dayjs';

interface Schedule {
  study: Date;
  election: Date;
  trip: Date;
}

const someSchedule: Schedule = {
  study: new Date('2025-04-03'),
  election: new Date('2025-06-03'),
  trip: new Date('2025-08-01'),
};

// TODO: 날짜 포맷..
const formatDate = (date: Date) => {
  const day = dayjs(date);
  return day.format('YYYY.MM.DD');
};

const printDate = () => {
  const studyDate = formatDate(someSchedule.study);
  const electionDate = formatDate(someSchedule.election);
  const tripDate = formatDate(someSchedule.trip);

  console.log(
    `study: ${studyDate}\nelection: ${electionDate}\ntrip: ${tripDate}`,
  );
};

//printDate();

// TODO: 타입스크립트 실습 문제2
// TODO: calcTotal() 라는 장바구니에 있는 상품들의 총 가격을 계산하는 함수를 만들어야 합니다.
// TODO: 장바구니의 각 상품은 이름, 종류, 가격, 개수 4가지 값이 들어갈 수 있어야 합니다.
// TODO: 장바구니에 담긴 각 상품 타입을 정의하고, 장바구니를 인자로 받아서
// TODO: 총 상품 가격을 반환하는 calcTotal() 함수를 타입을 적절하게 적용해서 만들어보세요.

// TODO: 장바구니의 각 상품 타입정의하고, cart 배열에도 타입 부여하여 상품을 3개이상 추가
// TODO: calcTotal 함수를 만들고 실행하여 지불해야할 총 금액을 계산하여 total에 저장하여 확인
interface ItemCart {
  name: string;
  type: string;
  price: number;
  number: number;
}

const cart: ItemCart[] = [
  { name: 'apple', type: 'fruit', price: 1000, number: 4 },
  { name: 'banana', type: 'fruit', price: 1500, number: 2 },
  { name: 'wine', type: 'drink', price: 30000, number: 1 },
  { name: 'coffee', type: 'drink', price: 2700, number: 3 },
];

const calcTotal1 = (items: ItemCart[]) => {
  let total: number = 0;
  items.forEach((item) => {
    total += item.price * item.number;
  });
  console.log('total:', total);
};

//calcTotal1(cart);

// TODO: 타입스크립트 실습 문제3
// TODO: 2번 문제의 확장입니다. 장바구니 상품의 종류 타입인 Category 라는 enum을 정의하고,
// TODO: Category.FRUIT (과일)의 경우 무료로 판매한다고 합시다.
// TODO: 2번 문제에서 만든 코드를 적당히 수정하여 Category enum을 적용하고,
// TODO: 최소 1개 이상의 과일을 장바구니에 추가하여 계산 결과를 확인해봅시다.

enum Category {
  FRUIT = 'fruit',
  DRINK = 'drink',
  MEAT = 'meat',
}

interface ItemCategory {
  name: string;
  category: Category;
  price: number;
  number: number;
}

const cartCategory: ItemCategory[] = [
  { name: 'apple', category: Category.FRUIT, price: 1000, number: 4 },
  { name: 'banana', category: Category.FRUIT, price: 1500, number: 2 },
  { name: 'wine', category: Category.DRINK, price: 30000, number: 1 },
  { name: 'pork', category: Category.MEAT, price: 9900, number: 2 },
];

const calcTotal2 = (cartCategory: ItemCategory[]) => {
  let total: number = 0;
  cartCategory.forEach((item) => {
    if (item.category !== Category.FRUIT) {
      total += item.price * item.number;
    }
  });
  console.log('total:', total);
};

//calcTotal2(cartCategory);

// ? 04-18
// TODO: 타입스크립트 실습 문제4
// TODO: fs 모듈과 JSON 데이터 활용에 대한 문제입니다.
// TODO: User 인터페이스를 만들고, 인자로 전달되는 user를 JSON 데이터인 users 배열에 추가하여 users.json 파일로 저장하도록 하세요.
// TODO: fs 모듈은 프로미스 형태의 것을 사용하면 됩니다.
// TODO: 한가지 규칙은 user의 id 값이 중복되면 안된다는 것입니다. (중복되는 경우 에러 발생하도록 처리)
// TODO: 2명 이상의 user 데이터를 추가하고 users.json에 데이터가 추가되어 저장되었는지 확인해보세요.
// TODO: 그리고 중복된 id를 가진 user 데이터를 추가 시도해보고 에러가 발생하는지 확인해보세요.

import fs from 'fs/promises';

interface User {
  id: number; // 중복되면 안됨
  name: string;
  age: number;
  isAdmin: boolean;
}

const saveUser = async (user: User) => {
  // TODO: 함수 작성...
  // users 초기화
  let jsonString: string;
  try {
    jsonString = await fs.readFile('users.json', 'utf-8');
    console.log('로드 string 데이터:', jsonString);
  } catch (error) {
    console.error('파일 없음', error);
    jsonString = JSON.stringify({ users: [] });
  }
  // 타입스크립트 as문으로 data의 타입을 지정해줄 수 있음 - 지정 안하면 any이기 때문
  const data = JSON.parse(jsonString) as { users: User[] };
  console.log('json형식 데이터:', data);

  // users 배열에서 user id 중복체크
  const userExists = data.users.some((item: User) => item.id === user.id);
  if (userExists) {
    throw new Error('User already exists');
  }

  // users 배열에 user 추가
  data.users.push(user);
  console.log('data', data);

  await fs.writeFile('users.json', JSON.stringify(data), 'utf-8');
};

const main4 = async () => {
  const users: User[] = [
    { id: 1, name: 'user1', age: 20, isAdmin: false },
    { id: 2, name: 'user2', age: 30, isAdmin: true },
    { id: 3, name: 'user3', age: 40, isAdmin: false },
    { id: 4, name: 'user4', age: 50, isAdmin: false },
  ];

  for (let i = 0; i < users.length; i++) {
    await saveUser(users[i]);
  }
};

//main4();

// TODO: 타입스크립트 실습 문제5
// TODO: fetch() 함수 사용에 대한 실습 문제입니다.
// TODO: jsonplaceholder의 Todo 리스트 API를 사용해서, title 값이 velit soluta adipisci molestias reiciendis harum 인 데이터의 id 값을 찾고
// TODO: 그 id 값을 console.log로 출력 해보세요.
// TODO: API URL: https://jsonplaceholder.typicode.com/todos
// TODO: API에서 반환하는 결과 데이터의 JSON 구조를 살펴보고, 배열에 포함된 각 Todo 아이템의 interface 타입을 정의하세요.
// TODO: 그리고 정의된 Todo의 title 값을 비교해서 velit soluta adipisci molestias reiciendis harum 와 title이 일치하는 Todo의 id 값을 찾습니다.

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async () => {
  // TODO: todos를 fetch() 함수로 받아와서 타입 주입하여 반환
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  return todos as Todo[];
};

const main5 = async () => {
  // TODO: fetchTodos를 통해 반환받은 데이터에서 배열의 todo 중 title 일치 확인하여 id 출력
  const todos = await fetchTodos();

  todos.forEach((todo: Todo) => {
    if (todo.title === 'velit soluta adipisci molestias reiciendis harum') {
      console.log(`searched - title: ${todo.title} / id: ${todo.id}`);
      return;
    }
  });
};

main5();
