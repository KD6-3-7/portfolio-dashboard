import ClockAnalog from "./ClockApp/ClockAnalog";
import ClockDigital from "./ClockApp/ClockDigital";
import ClockTemplate from "./ClockApp/ClockTemplate";

function ClockApp() {
    return (
        <ClockTemplate>
            <ClockAnalog />
            <ClockDigital />
        </ClockTemplate>
    );
}

export default ClockApp;