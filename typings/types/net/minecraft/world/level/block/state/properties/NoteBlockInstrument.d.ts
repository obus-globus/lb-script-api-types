import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { NoteBlockInstrument$Type } from '../../../../../../../net/minecraft/world/level/block/state/properties/NoteBlockInstrument$Type.d.ts'
export class NoteBlockInstrument extends Enum<NoteBlockInstrument> implements StringRepresentable {
    static BANJO: NoteBlockInstrument;
    static BASEDRUM: NoteBlockInstrument;
    static BASS: NoteBlockInstrument;
    static BELL: NoteBlockInstrument;
    static BIT: NoteBlockInstrument;
    static CHIME: NoteBlockInstrument;
    static COW_BELL: NoteBlockInstrument;
    static CREEPER: NoteBlockInstrument;
    static CUSTOM_HEAD: NoteBlockInstrument;
    static DIDGERIDOO: NoteBlockInstrument;
    static DRAGON: NoteBlockInstrument;
    static FLUTE: NoteBlockInstrument;
    static GUITAR: NoteBlockInstrument;
    static HARP: NoteBlockInstrument;
    static HAT: NoteBlockInstrument;
    static IRON_XYLOPHONE: NoteBlockInstrument;
    static PIGLIN: NoteBlockInstrument;
    static PLING: NoteBlockInstrument;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SKELETON: NoteBlockInstrument;
    static SNARE: NoteBlockInstrument;
    static TRUMPET: NoteBlockInstrument;
    static TRUMPET_EXPOSED: NoteBlockInstrument;
    static TRUMPET_OXIDIZED: NoteBlockInstrument;
    static TRUMPET_WEATHERED: NoteBlockInstrument;
    static WITHER_SKELETON: NoteBlockInstrument;
    static XYLOPHONE: NoteBlockInstrument;
    static ZOMBIE: NoteBlockInstrument;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => Object | null): Codec<StringRepresentable>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NoteBlockInstrument;
    static values(): (Object | null)[];
    private constructor(name: string, soundEvent: Holder<SoundEvent>, type: NoteBlockInstrument$Type)
    // private name: string;
    readonly soundEvent: Holder<SoundEvent>;
    // private type: NoteBlockInstrument$Type;
    getSerializedName(): string;
    getSoundEvent(): Holder<SoundEvent>;
    hasCustomSound(): boolean;
    isTunable(): boolean;
    worksAboveNoteBlock(): boolean;
    name(): "HARP" | "BASEDRUM" | "SNARE" | "HAT" | "BASS" | "FLUTE" | "BELL" | "GUITAR" | "CHIME" | "XYLOPHONE" | "IRON_XYLOPHONE" | "COW_BELL" | "DIDGERIDOO" | "BIT" | "BANJO" | "PLING" | "TRUMPET" | "TRUMPET_EXPOSED" | "TRUMPET_OXIDIZED" | "TRUMPET_WEATHERED" | "ZOMBIE" | "SKELETON" | "CREEPER" | "DRAGON" | "WITHER_SKELETON" | "PIGLIN" | "CUSTOM_HEAD";
}