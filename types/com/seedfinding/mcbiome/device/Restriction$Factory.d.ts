import type { Restriction } from '../../../../com/seedfinding/mcbiome/device/Restriction.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Restriction$Factory<T extends Restriction> extends Object{
    create(arg0: MCVersion, arg1: number, arg2: number): T;
}