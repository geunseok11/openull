# openull 과제

## Stack

>> React-Native / 
>> React-Navigation / 
>> Redux / 
>> Redux-saga / 
>> axios / 
>> styled-components / 

## 홈화면 상품 리스트

- API redux-saga 로 호출 

- useEffect 함수를 활용하여 dispatch로 제품 리스트 호출

- map 함수를 이용하여 개별 상품 리스트 배치, shortId.generate()를 이용하여 각 인자에 키값 지정

## 상품 상세 정보

- 상품 클릭 시 상세 정보 페이지(GoodsInfo page)로 넘어가게 하며, prefix 값을 전달

- 상품 상세 정보 페이지에서 넘어온 prefix 값을 useEffect를 활용하여 reducer 함수를 실행

- 상세 정보 API resourse를 받아와 GoodsInfoList component로 상품 정보를 전달

- 장바구니 버튼을 누를 시 장바구니 페이지로 이동

## 상품 검색

- 홈화면 하단 Search 버튼을 눌러 검색 페이지로 이동

- 원하는 정보를 textInput창에 입력하게되면, onChangeText를 통해 상품리스트 name과 value값을 비교하여 새로운 리스트 배열을 생성

- 새로운 리스트를 배치

## 상품 장바구니 담기

- 상품 상세 정보 페이지(GoodsInfo)에서 주문 버튼을 누르게 되면, onPress함수를 통해 장바구니 페이지로 넘어가며 props를 전달

- props를 bucket 배열에 넣은 후, props를 bucketList component로 전달

- bucket 내부에 있는 상품 수에 따라 수량과 가격을 reduce 함수를 이용하여 합계 계산

## 구매하기

- 장바구니 페이지(Bucket page)에서 구매하기 버튼 클릭시 onPressSale 함수로 콜백 함수 전달

- reducer로 데이터를 넘겨진 후 post 값을 api로 전달
