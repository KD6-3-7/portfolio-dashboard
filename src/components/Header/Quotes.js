import './../../styles/Header/Quotes.scss';

function Quotes() {
    const quotesArray = [
        {
            quote: '뇌는 근육과 같아서, 사용하면 기분이 매우 좋아진다. 무언가 이해한다는 건 기쁜 일이다.',
            author: '칼 세이건'
        },
        {
            quote: '바다를 지배하는 자가 모든 것을 지배한다.',
            author: '테미스토클레스'
        },
        {
            quote: '좋은 책을 찢는 사람은 이성 그 자체를 죽이는 것과 마찬가지다.',
            author: '존 밀턴'
        },
        {
            quote: '남을 아는 사람은 현명하다. 자신을 아는 사람은 깨달음을 얻는다.',
            author: '노자'
        },
        {
            quote: '유일한 선은 지식이고, 유일한 악은 무지다.',
            author: '소크라테스'
        },
        {
            quote: '내 생각에 이 세상에서 중요한 것은 우리가 지금 어디 서 있느냐가 아니라, 어느 방향으로 움직이고 있느냐다.',
            author: '올리버 웬델 홈즈'
        },
        {
            quote: '과학의 큰 진보는 모두 대담한 상상력에서 비롯되었다.',
            author: '존 듀이'
        },
        {
            quote: '우리가 두려워해야 할 유일한 것은 두려움 그 자체라는 것입니다.',
            author: '프랭클린 D. 루스벨트'
        },
        {
            quote: '매사를 여러 개의 작은 일로 쪼개면 특별히 어려울 일이 없다.',
            author: '헨리 포드'
        },
        {
            quote: '이것은 한 명의 인간에게는 작은 발걸음이지만, 인류에게는 위대한 도약이다.',
            author: '닐 암스트롱'
        },
        {
            quote: '컴퓨터는 구약 성서의 신들과도 같아서, 규칙만 많고 자비는 없다.',
            author: '조지프 켐벨'
        },
        {
            quote: '내가 바라는 건 오직 범선 한 척과 길을 인도해줄 별 하나.',
            author: '존 메이스필드'
        },
        {
            quote: '방황하는 모든 이들이 길을 잃는 것은 아니다.',
            author: 'J.R.R. 톨킨'
        },
        {
            quote: '단 한번이라도 날아 보았다면, 땅을 걸어도 눈은 하늘로 가 있으리라. 가 보았고 언젠가 돌아가고 싶어 하는 그곳으로.',
            author: '레오나르도 다빈치'
        },
        {
            quote: '달을 겨냥해라. 빗나가더라도 별을 맞출 수도 있다.',
            author: 'W. 클레멘트 스톤'
        },
        {
            quote: '목적 없이 사는 것보단 무언가를 위해 싸우는 편이 낫습니다.',
            author: '조지 S. 패튼'
        },
        {
            quote: '우리가 밤에 고개를 들어 별을 볼 때, 우리가 보는 반짝임은 먼 곳에서 일어나는 핵융합 덕분입니다.',
            author: '칼 세이건'
        },
        {
            quote: '미래가 멀리 있어 보이겠지만, 지금 이 시점부터 미래가 시작되고 있다.',
            author: '매티 스테파넥'
        },
        {
            quote: '모든 작용에는 언제나 그에 상반되는 동일한 크기의 반작용이 일어난다.',
            author: '아이작 뉴턴'
        },
        {
            quote: '가장 강한 종이 살아남는 것이 아니라, 가장 잘 적응하는 종이 살아남는다.',
            author: '찰스 다윈'
        }
    ];
    const todaysQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

    return (
        <div className='Quotes'>
            <p className='quote'>"{todaysQuote.quote}"</p>
            <p className='author'>― {todaysQuote.author}</p>
        </div>
    );
}

export default Quotes;