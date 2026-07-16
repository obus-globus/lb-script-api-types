import type { UpdateChannel } from '../../../../com/terraformersmc/modmenu/api/UpdateChannel.d.ts'
import type { ModMenuConfig$GameMenuButtonStyle } from '../../../../com/terraformersmc/modmenu/config/ModMenuConfig$GameMenuButtonStyle.d.ts'
import type { ModMenuConfig$LibraryVisibility } from '../../../../com/terraformersmc/modmenu/config/ModMenuConfig$LibraryVisibility.d.ts'
import type { ModMenuConfig$ModCountLocation } from '../../../../com/terraformersmc/modmenu/config/ModMenuConfig$ModCountLocation.d.ts'
import type { ModMenuConfig$Sorting } from '../../../../com/terraformersmc/modmenu/config/ModMenuConfig$Sorting.d.ts'
import type { ModMenuConfig$TitleMenuButtonStyle } from '../../../../com/terraformersmc/modmenu/config/ModMenuConfig$TitleMenuButtonStyle.d.ts'
import type { BooleanConfigOption } from '../../../../com/terraformersmc/modmenu/config/option/BooleanConfigOption.d.ts'
import type { EnumConfigOption } from '../../../../com/terraformersmc/modmenu/config/option/EnumConfigOption.d.ts'
import type { StringSetConfigOption } from '../../../../com/terraformersmc/modmenu/config/option/StringSetConfigOption.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../../net/minecraft/client/OptionInstance.d.ts'
export class ModMenuConfig extends Object {
    static BUTTON_UPDATE_BADGE: BooleanConfigOption;
    static COMPACT_LIST: BooleanConfigOption;
    static CONFIG_MODE: BooleanConfigOption;
    static COUNT_CHILDREN: BooleanConfigOption;
    static COUNT_HIDDEN_MODS: BooleanConfigOption;
    static COUNT_LIBRARIES: BooleanConfigOption;
    static DISABLE_DRAG_AND_DROP: BooleanConfigOption;
    static DISABLE_UPDATE_CHECKER: StringSetConfigOption;
    static EASTER_EGGS: BooleanConfigOption;
    static GAME_MENU_BUTTON_STYLE: EnumConfigOption<ModMenuConfig$GameMenuButtonStyle>;
    static HIDDEN_CONFIGS: StringSetConfigOption;
    static HIDDEN_MODS: StringSetConfigOption;
    static HIDE_BADGES: BooleanConfigOption;
    static HIDE_CONFIG_BUTTONS: BooleanConfigOption;
    static HIDE_MOD_CREDITS: BooleanConfigOption;
    static HIDE_MOD_LICENSE: BooleanConfigOption;
    static HIDE_MOD_LINKS: BooleanConfigOption;
    static MODIFY_GAME_MENU: BooleanConfigOption;
    static MODIFY_TITLE_SCREEN: BooleanConfigOption;
    static MODS_BUTTON_STYLE: EnumConfigOption<ModMenuConfig$TitleMenuButtonStyle>;
    static MOD_COUNT_LOCATION: EnumConfigOption<ModMenuConfig$ModCountLocation>;
    static QUICK_CONFIGURE: BooleanConfigOption;
    static RANDOM_JAVA_COLORS: BooleanConfigOption;
    static SHOW_LIBRARIES: EnumConfigOption<ModMenuConfig$LibraryVisibility>;
    static SORTING: EnumConfigOption<ModMenuConfig$Sorting>;
    static TRANSLATE_DESCRIPTIONS: BooleanConfigOption;
    static TRANSLATE_NAMES: BooleanConfigOption;
    static UPDATE_CHANNEL: EnumConfigOption<UpdateChannel>;
    static UPDATE_CHECKER: BooleanConfigOption;
    static asOptions(): OptionInstance<Object>[];
    constructor()
}