import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NoteBlockInstrument;
    static values(): NoteBlockInstrument[];
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