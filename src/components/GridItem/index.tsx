import { GridItemType } from "@/types/GridItemType";
import { items } from "@/data/items";
import b7 from "/public/svgs/b7.svg";

import * as C from "./styles";

type Props = {
    item: GridItemType,
    onClick: () => void
}
export const GridItem = ({item, onClick}: Props) => {
    return (
        <C.Container 
            showBackground={item.permanentShown || item.shown}
            onClick={onClick}
        >
            {!item.permanentShown && !item.shown &&
                <C.Icon src={b7.src} opacity={.1}  alt=""/>
            }

            {(item.permanentShown || item.shown) && item.item !== null && 
                <C.Icon src={items[item.item].icon.src} alt=""/>
            }

        </C.Container>
    )
}