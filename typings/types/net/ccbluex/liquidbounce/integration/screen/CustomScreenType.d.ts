import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { CustomScreenType$Companion } from '../../../../../net/ccbluex/liquidbounce/integration/screen/CustomScreenType$Companion.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class CustomScreenType extends Enum<CustomScreenType> {
    static ALT_MANAGER: CustomScreenType;
    static BROWSER: CustomScreenType;
    static CLICK_GUI: CustomScreenType;
    static CONTAINER: CustomScreenType;
    static CREATE_WORLD: CustomScreenType;
    static Companion: CustomScreenType$Companion;
    static DISCONNECTED: CustomScreenType;
    static GAME_MENU: CustomScreenType;
    static HUD: CustomScreenType;
    static INVENTORY: CustomScreenType;
    static MULTIPLAYER: CustomScreenType;
    static MULTIPLAYER_REALMS: CustomScreenType;
    static OPTIONS: CustomScreenType;
    static PROXY_MANAGER: CustomScreenType;
    static SINGLEPLAYER: CustomScreenType;
    static TITLE: CustomScreenType;
    static VIAFABRICPLUS_PROTOCOL_SELECTION: CustomScreenType;
    static byName(name: string): CustomScreenType;
    static getEntries(): CustomScreenType[];
    static recognize(screen: Screen): CustomScreenType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CustomScreenType;
    static values(): (Object | null)[];
    private constructor(routeName: string, recognizer: (param0: Screen) => boolean, isInGame: boolean, open: () => void)
    // private isInGame: boolean;
    /*not mapped: */ isInGame(): boolean;
    // private open: () => void;
    // private recognizer: (param0: Screen) => boolean;
    readonly routeName: string;
    open(): void;
    name(): "HUD" | "CLICK_GUI" | "ALT_MANAGER" | "PROXY_MANAGER" | "TITLE" | "MULTIPLAYER" | "MULTIPLAYER_REALMS" | "SINGLEPLAYER" | "CREATE_WORLD" | "OPTIONS" | "GAME_MENU" | "INVENTORY" | "CONTAINER" | "DISCONNECTED" | "VIAFABRICPLUS_PROTOCOL_SELECTION" | "BROWSER";
}