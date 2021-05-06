import actions from "@/shared/actions";

export function sendIndex(info){
    actions.setGlobalState({ index:info });
}

export function watchIndex(func,bool){
    actions.onGlobalStateChange(func,bool);
}