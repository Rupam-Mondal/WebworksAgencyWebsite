import { AuroraText } from "../magicui/aurora-text";

function Aurora({text , size , intensity}){
    return (
        <>
            <div className={`text-${size} font-${intensity}`}>
                <AuroraText>
                    {text}
                </AuroraText>
            </div>
        </>
    )
}

export default Aurora;