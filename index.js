var now = new Date();
console.log(now.toISOString()); // 영국 시간 UTC 기준
console.log(now.toString()); // KST
console.log(now.toLocaleString()); // 좀 더 가시성 좋은 KST
var timestamp = now.getTime();
console.log(timestamp); // Unix epoch(1970년 1월 1일 00:00:00 UTC) 로부터 몇 ms 지났는지
var timestamp2 = Date.now();
console.log(timestamp2); // 현재 시간의 타임스탬프 바로 출력하기
var date = new Date('2025-01-01'); // 특정 날짜를 지정
var timestamp3 = date.getTime();
console.log(timestamp3);
var date2 = new Date(1585701937000); // 타임스탬프로 특정 날짜를 지정 (https://www.epochconverter.com/ 이용)
console.log(date2.toString());
// TODO: 2025-03-15 ~ 2025-04-16 사이의 날짜가 몇일 차이인지 계산해서
// TODO: console.log()로 띄워봅시다
// ? 1초 = 1000ms => 1000, 1분 => 60 * 1000, 1시간 => 60 * 60 * 1000
// ? 타임스탬프를 구하는 메소드는 getTime()
console.log(
  '==================================================================',
);
var startTime = new Date('2025-03-15').getTime();
var endTime = new Date('2025-04-16').getTime();
var diffTime = endTime - startTime;
console.log(diffTime);
var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
console.log(''.concat(diffDays, '\uC77C'));
console.log('test');
console.log(
  '=============================== typescript ===================================',
);
// typescript 변수 지정법
var string = 'hello';
var number = 42;
var boolean = true;
///const bigInt: bigint = BigInt(18972384798234890);
var nullType = null;
var undefinedType = undefined;
var anyType = 'This can be anything'; // 사용을 자제해야 함 (문자,숫자,null 다 올 수 있음)
var array = [1, true, '3', 4, null];
var array1 = [1, 2, 3, 4, 5];
var array2 = ['1', '2', '3', '4', '5'];
var array3 = [true, false];
// | : union 타입으로 여러 타입 지정 가능
var object1 = {
  name: 'John Doe',
  age: 30,
  isEmployed: true,
  hobbies: ['reading', 'gaming', 'coding'],
  address: {
    street: '123 Main St',
  },
};
// 자바스크립트 코드는 camelCase로 작성함 (시작을 소문자)
var constantValue = '42';
console.info(constantValue);
// enum : 특정한 값들만 사용하도록 정의
var Role;
(function (Role) {
  Role['ADMIN'] = 'admin';
  Role['USER'] = 'user';
  Role['GUEST'] = 'guest';
})(Role || (Role = {}));
// 정의된 값만 지정해야 에러가 나지 않음
var someUserRole = Role.ADMIN;
console.log(someUserRole);
