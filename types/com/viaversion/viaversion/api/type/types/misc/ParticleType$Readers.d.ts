import type { Particle } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { DynamicType$DataReader } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/DynamicType$DataReader.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ParticleType$Readers extends Object {
    static BLOCK: (param0: Particle, param1: ByteBuf) => void;
    static COLOR: (param0: Particle, param1: ByteBuf) => void;
    static DUST: (param0: Particle, param1: ByteBuf) => void;
    static DUST1_21_2: (param0: Particle, param1: ByteBuf) => void;
    static DUST_TRANSITION: (param0: Particle, param1: ByteBuf) => void;
    static DUST_TRANSITION1_21_2: (param0: Particle, param1: ByteBuf) => void;
    static ITEM1_13: (param0: Particle, param1: ByteBuf) => void;
    static ITEM1_13_2: (param0: Particle, param1: ByteBuf) => void;
    static POWER: (param0: Particle, param1: ByteBuf) => void;
    static SCULK_CHARGE: (param0: Particle, param1: ByteBuf) => void;
    static SHRIEK: (param0: Particle, param1: ByteBuf) => void;
    static SPELL: (param0: Particle, param1: ByteBuf) => void;
    static TRAIL1_21_2: (param0: Particle, param1: ByteBuf) => void;
    static TRAIL1_21_4: (param0: Particle, param1: ByteBuf) => void;
    static VIBRATION: (param0: Particle, param1: ByteBuf) => void;
    static VIBRATION1_19: (param0: Particle, param1: ByteBuf) => void;
    static VIBRATION1_20_3: (param0: Particle, param1: ByteBuf) => void;
    static item(paramarg0: Type<Item>): (param0: Particle, param1: ByteBuf) => void;
    constructor()
}