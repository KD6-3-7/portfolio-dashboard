import HeaderTemplate from "./Header/HeaderTemplate";
import TodayDate from "./Header/TodayDate";
import Quotes from "./Header/Quotes";

function Header() {    
    return (
        <HeaderTemplate>
            <TodayDate />
            <Quotes />
        </HeaderTemplate>
    );
}

export default Header;