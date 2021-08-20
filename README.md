# openull 과제

## Stack

>> React-Native
>> React-Navigation
>> Redux
>> Redux-saga
>> axios
>> styled-components

## 홈화면 상품 리스트

- API redux-saga 로 호출 

- useEffect 함수를 활용하여 dispatch로 제품 리스트 호출

- map 함수를 이용하여 개별 상품 리스트 배치, shortId.generate()를 이용하여 각 인자에 키값 지정

## 상품 상세 정보

- 상품 클릭 시 상세 정보 페이지로 넘어가게 하며, prefix 값을 넘겨준다

- 상품 상세 정보 페이지에서 넘어온 prefix 값을 useEffect를 활용하여 reducer 함수를 실행

- 상세 정보 API resourse를 받아와 상품 정보를 나열한다

- 장바구니 버튼을 누를 시 장바구니 페이지로 넘어간다

## 상품 검색

- 홈화면 하단 Search 버튼을 눌러 검색 페이지로 넘어간다

- 원하는 정보를 검색하게 되면 onChangeText를 통해 상품리스트 이름과 비교하여 새로운 리스트 배열을 만든다

- 새로운 리스트를 배치 한다
