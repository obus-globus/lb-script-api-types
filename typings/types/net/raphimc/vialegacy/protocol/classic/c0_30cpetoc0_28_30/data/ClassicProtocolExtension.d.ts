import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ClassicProtocolExtension extends Enum<ClassicProtocolExtension> {
    static BLOCK_DEFINITIONS: ClassicProtocolExtension;
    static BLOCK_DEFINITIONS_EXT: ClassicProtocolExtension;
    static BLOCK_PERMISSIONS: ClassicProtocolExtension;
    static BULK_BLOCK_UPDATE: ClassicProtocolExtension;
    static CHANGE_MODEL: ClassicProtocolExtension;
    static CLICK_DISTANCE: ClassicProtocolExtension;
    static CUSTOM_BLOCKS: ClassicProtocolExtension;
    static CUSTOM_MODELS: ClassicProtocolExtension;
    static CUSTOM_PARTICLES: ClassicProtocolExtension;
    static EMOTE_FIX: ClassicProtocolExtension;
    static ENTITY_PROPERTY: ClassicProtocolExtension;
    static ENV_COLORS: ClassicProtocolExtension;
    static ENV_MAP_APPEARANCE: ClassicProtocolExtension;
    static ENV_MAP_ASPECT: ClassicProtocolExtension;
    static ENV_WEATHER_TYPE: ClassicProtocolExtension;
    static EXTENDED_BLOCKS: ClassicProtocolExtension;
    static EXTENDED_TEXTURES: ClassicProtocolExtension;
    static EXT_ENTITY_POSITIONS: ClassicProtocolExtension;
    static EXT_ENTITY_TELEPORT: ClassicProtocolExtension;
    static EXT_PLAYER_LIST: ClassicProtocolExtension;
    static FAST_MAP: ClassicProtocolExtension;
    static FULL_CP437: ClassicProtocolExtension;
    static HACK_CONTROL: ClassicProtocolExtension;
    static HELD_BLOCK: ClassicProtocolExtension;
    static INSTANT_MOTD: ClassicProtocolExtension;
    static INVENTORY_ORDER: ClassicProtocolExtension;
    static LONGER_MESSAGES: ClassicProtocolExtension;
    static MESSAGE_TYPES: ClassicProtocolExtension;
    static PLAYER_CLICK: ClassicProtocolExtension;
    static SELECTION_CUBOID: ClassicProtocolExtension;
    static SET_HOTBAR: ClassicProtocolExtension;
    static SET_SPAWNPOINT: ClassicProtocolExtension;
    static TEXT_COLORS: ClassicProtocolExtension;
    static TEXT_HOT_KEY: ClassicProtocolExtension;
    static TWO_WAY_PING: ClassicProtocolExtension;
    static VELOCITY_CONTROL: ClassicProtocolExtension;
    static byName(paramarg0: string): ClassicProtocolExtension;
    static byNameAndVersion(paramarg0: string, paramarg1: number): ClassicProtocolExtension;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClassicProtocolExtension;
    static values(): (Object | null)[];
    private constructor(arg2: string, ...arg3: number[])
    readonly supportedVersions: (Object | null)[];
    getHighestSupportedVersion(): number;
    getName(): string;
    getSupportedVersions(): (Object | null)[];
    isSupported(): boolean;
    supportsVersion(arg0: number): boolean;
    toString(): string;
    name(): "CLICK_DISTANCE" | "CUSTOM_BLOCKS" | "HELD_BLOCK" | "TEXT_HOT_KEY" | "EXT_PLAYER_LIST" | "ENV_COLORS" | "SELECTION_CUBOID" | "BLOCK_PERMISSIONS" | "CHANGE_MODEL" | "ENV_MAP_APPEARANCE" | "ENV_WEATHER_TYPE" | "HACK_CONTROL" | "EMOTE_FIX" | "MESSAGE_TYPES" | "LONGER_MESSAGES" | "FULL_CP437" | "BLOCK_DEFINITIONS" | "BLOCK_DEFINITIONS_EXT" | "TEXT_COLORS" | "BULK_BLOCK_UPDATE" | "ENV_MAP_ASPECT" | "PLAYER_CLICK" | "ENTITY_PROPERTY" | "EXT_ENTITY_POSITIONS" | "TWO_WAY_PING" | "INVENTORY_ORDER" | "INSTANT_MOTD" | "EXTENDED_BLOCKS" | "FAST_MAP" | "EXTENDED_TEXTURES" | "SET_HOTBAR" | "SET_SPAWNPOINT" | "VELOCITY_CONTROL" | "CUSTOM_PARTICLES" | "CUSTOM_MODELS" | "EXT_ENTITY_TELEPORT";
}