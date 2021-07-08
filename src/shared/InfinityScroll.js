import React from 'react';
import _ from "lodash";
import {Spinner} from "../elements";

const InfinityScroll = (props) => {

    const {children, callNext, is_next, loading} = props;

    const _handleScroll = _.throttle(() => {

        if(loading){
            return;
        }

        const {innerHeight} = window;
        const {scrollHeight} = document.body;

        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if(scrollHeight - innerHeight - scrollTop < 200){
            callNext();
        }
    },300);

    const handleScroll = React.useCallback(_handleScroll,[loading]);

    React.useEffect(() => {

        if(loading){
            return;
        }

        if(is_next){
            window.addEventListener("scroll", handleScroll);
        }else{
            window.removeEventListener("scroll", handleScroll);
        }
        
        return () => window.removeEventListener("scroll", handleScroll); // 클래스형에서 언마운트랑 비슷한 기능을 함. 구독해제?할 때 쓰임
    }, [is_next, loading]);

    return (
        <React.Fragment>
            {props.children}
            {is_next && (<Spinner/>)}
        </React.Fragment>
    )
}


InfinityScroll.defaultProps = {
    children: null,
    callNext: () => {},
    is_next: false,
    loading: false,
}

export default InfinityScroll;
