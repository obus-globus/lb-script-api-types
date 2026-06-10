import type { Particle } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { DynamicType$DataReader } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/DynamicType$DataReader.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ParticleType$Readers extends Object {
    static BLOCK: (param0: ByteBuf, param1: Particle) => void;
    static COLOR: (param0: ByteBuf, param1: Particle) => void;
    static DUST: (param0: ByteBuf, param1: Particle) => void;
    static DUST1_21_2: (param0: ByteBuf, param1: Particle) => void;
    static DUST_TRANSITION: (param0: ByteBuf, param1: Particle) => void;
    static DUST_TRANSITION1_21_2: (param0: ByteBuf, param1: Particle) => void;
    static ITEM1_13: (param0: ByteBuf, param1: Particle) => void;
    static ITEM1_13_2: (param0: ByteBuf, param1: Particle) => void;
    static POWER: (param0: ByteBuf, param1: Particle) => void;
    static SCULK_CHARGE: (param0: ByteBuf, param1: Particle) => void;
    static SHRIEK: (param0: ByteBuf, param1: Particle) => void;
    static SPELL: (param0: ByteBuf, param1: Particle) => void;
    static TRAIL1_21_2: (param0: ByteBuf, param1: Particle) => void;
    static TRAIL1_21_4: (param0: ByteBuf, param1: Particle) => void;
    static VIBRATION: (param0: ByteBuf, param1: Particle) => void;
    static VIBRATION1_19: (param0: ByteBuf, param1: Particle) => void;
    static VIBRATION1_20_3: (param0: ByteBuf, param1: Particle) => void;
    static item(paramarg0: Type<Item>): (param0: ByteBuf, param1: Particle) => void;
    constructor()
}