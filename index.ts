const now = new Date();
console.log(now.toISOString()); // 영국 시간 UTC 기준
console.log(now.toString()); // KST
console.log(now.toLocaleString()); // 좀 더 가시성 좋은 KST

const timestamp = now.getTime();
console.log(timestamp); // Unix epoch(1970년 1월 1일 00:00:00 UTC) 로부터 몇 ms 지났는지

const timestamp2 = Date.now();
console.log(timestamp2); // 현재 시간의 타임스탬프 바로 출력하기

const date = new Date('2025-01-01'); // 특정 날짜를 지정
const timestamp3 = date.getTime();
console.log(timestamp3);

const date2 = new Date(1585701937000); // 타임스탬프로 특정 날짜를 지정 (https://www.epochconverter.com/ 이용)
console.log(date2.toString());

// TODO: 2025-03-15 ~ 2025-04-16 사이의 날짜가 몇일 차이인지 계산해서
// TODO: console.log()로 띄워봅시다
// ? 1초 = 1000ms => 1000, 1분 => 60 * 1000, 1시간 => 60 * 60 * 1000
// ? 타임스탬프를 구하는 메소드는 getTime()
console.log(
  '==================================================================',
);
const startTime = new Date('2025-03-15').getTime();
const endTime = new Date('2025-04-16').getTime();
const diffTime = endTime - startTime;
console.log(diffTime);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
console.log(`${diffDays}일`);
console.log('test');

console.log(
  '=============================== typescript ===================================',
);

// typescript 변수 지정법
const string: string = 'hello';
const number: number = 42;
const boolean: boolean = true;
///const bigInt: bigint = BigInt(18972384798234890);
const nullType: null = null;
const undefinedType: undefined = undefined;
const anyType: any = 'This can be anything'; // 사용을 자제해야 함 (문자,숫자,null 다 올 수 있음)

const array: any[] = [1, true, '3', 4, null];
const array1: number[] = [1, 2, 3, 4, 5];
const array2: string[] = ['1', '2', '3', '4', '5'];
const array3: boolean[] = [true, false];

// | : union 타입으로 여러 타입 지정 가능
const object1: {
  [key in string]:
    | string
    | number
    | boolean
    | any[]
    | { [key in string]: string };
} = {
  name: 'John Doe',
  age: 30,
  isEmployed: true,
  hobbies: ['reading', 'gaming', 'coding'],
  address: {
    street: '123 Main St',
  },
};

// 커스텀 타입
// 타입스크립트의 Type은 PascalCase로 작성하고 (시작을 대문자)
type StringOrNumberType = string | number;
// 자바스크립트 코드는 camelCase로 작성함 (시작을 소문자)
const constantValue: StringOrNumberType = '42';
console.info(constantValue);

// enum : 특정한 값들만 사용하도록 정의, enum은 build를 해도 자바스크립트에 남음
enum Role {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

// 정의된 값만 지정해야 에러가 나지 않음
const someUserRole: Role = Role.ADMIN;
console.log(someUserRole);

const func = (arg: string): string => {
  console.log(arg);
  return arg;
};

const result = func('hello, TS');

// * 객체의 타입 지정법

// 값이 하나인 타입은 type으로, 값이 여러개인 타입은 interface로 정의함
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
  email?: string; // 필드 우측에 ?를 붙이면 옵셔널한 필드가 됨 (있을 수도, 없을 수도 있다)
}

const userA: User = {
  name: 'John Doe',
  age: 30,
  isAdmin: false,
  email: 'usera@example.com',
};
const userB: User = {
  name: 'John Doe',
  age: 30,
  isAdmin: false,
  email: undefined, // undefined, null을 작성해도 타입적으로 문제가 되지 않음
};
