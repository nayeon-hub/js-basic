## Coordinates X,Y

- Element.getBoundingClientRect()
  - Element object안에 들어있는 API 즉, 함수
  - DOM에 들어있는 모든 요소들 Element
  - 윈도우 위에서 얼마나 떨어져 있는지, 크기는 얼마인지 알아낼 수 있다.
  - top,left,right,bottom => 항상 브라우저의 왼쪽과 상단을 기준
- 왼쪽 상단이 (0,0) : 아래로 갈수록, 오른쪽으로 갈수록 숫자가 양수로 커진다.
- Event.Client x,y VS Event.Page x,y
  - click event를 했을 때의 x,y값은 브라우저 윈도우 창 기준
  - Page의 x,y값은 "문서"의 시작점으로부터 계산된다.

## Loaded

브라우저에서 HTML파일을 먼저 읽은 다음에 그에 관련된 이미지나 폰트등 필요한 리소스가 있다면 리소스도 함께 다운로드하게 된다. 그리고 자바스크립트 파일이 있다면 자바스크립트 파일도 다운로드 받는다.

브라우저가 html을 다 읽고 DOM요소로 변환하게 되고 그 다음에 script부분을 만나면 윈도우에 이벤트 리스너를 등록하게 되고 window에서 페이지에 필요한 모든 리소스가 다 로딩이 완료가 되면 콜백함수가 출려되는 걸 볼 수 있음.

- load Event : body끝에 script를 넣고 윈도우에서 이벤트리스너를 등록하고 페이지가 전부 load(html과 resource)가 되었을 때 콜백함수가 출력되도록, 페이지안에서 쓰여지는 폰트나 이미지, css 등 리소스가 다 다운로드 되면 호출됨

- DOMContentLoaded Event : Document만 즉 html만 다 완료가 되면 호출됨
  자바스크립트 파일이 어떤 리소스에 대해서 무언가를 수행하지 않는 이상 DOMContentLoaded 안에서 동작을 수행하는 것이 좀 더 빠르게 사용자가 볼 수 있는 장점이 있다.

- beforeunloaded Event : 페이지가 끝나기 전에 before unloaded

- unloaded Event : 페이지의 resource까지 unloade되면!

defer옵션을 쓰게 되면 html이 완전히 파싱되고 나서 contentLoaded가 출력되기 이전에 즉, 이벤트가 발생하기 이전에 먼저 호출되고 그 다음에 contentLoaded가 호출되고 그 다음에 페이지에서 사용하는 폰트나 이미지 이런 리소스가 다 다운로드되면 로드가 호출된다.
defer옵션을 이용하게 되면 DOMContentLoaded가 발생하기 바로 직전에 사용할 수 있도록 설정한다.

- beforeunloaded Event => 사용자가 페이지를 나가기 전에 우리가 무언가를 해야한다면 콜백함수를 등록해서 처리할 수 있다.
- load는 모든 리소스가 다 다운로드 된 후에 이벤트가 발생한다.
- defer옵션이나 DOMContentLoaded라는 이벤트는 HTML만 완료가 되면 호출이 된다. 페이지 안에 리소스가 많은 경우, DOMContentLoaded가 빨리 호출이 되고 load는 조금 나중에 리소스가 다 완벽하게 준비되면 불려진다.

async, defer의 차이 확인하자!
