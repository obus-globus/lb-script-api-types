import type { Pipeline$IndexKey } from '../../../ai/djl/translate/Pipeline$IndexKey.d.ts'
import type { Transform } from '../../../ai/djl/translate/Transform.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Pipeline extends Object {
    constructor()
    constructor(...arg0: Transform[])
    readonly transforms: Pair<Pipeline$IndexKey, Transform>[];
    add(arg0: Transform): Pipeline;
    add(arg0: number, arg1: Transform): Pipeline;
    add(arg0: string, arg1: Transform): Pipeline;
    getTransforms(): Transform[];
    insert(arg0: number, arg1: Transform): Pipeline;
    insert(arg0: number, arg1: number, arg2: Transform): Pipeline;
    insert(arg0: number, arg1: string, arg2: Transform): Pipeline;
    transform(arg0: (Object | null)[]): (Object | null)[];
}