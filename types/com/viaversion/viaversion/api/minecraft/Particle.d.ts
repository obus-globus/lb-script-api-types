import type { Particle$ParticleData } from '../../../../../com/viaversion/viaversion/api/minecraft/Particle$ParticleData.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { IdHolder } from '../../../../../com/viaversion/viaversion/util/IdHolder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Particle extends Object implements Copyable, IdHolder {
    static copy(paramarg0: Object | null): Object | null;
    constructor(arg0: number)
    readonly arguments: Particle$ParticleData<Object>[];
    readonly id: number;
    add<T extends Object | number | string | boolean>(arg0: Type<T>, arg1: T): void;
    add<T extends Object | number | string | boolean>(arg0: number, arg1: Type<T>, arg2: T): void;
    copy(): Particle;
    getArgument(arg0: number): Particle$ParticleData<T>;
    getArguments(): Particle$ParticleData<Object>[];
    id(): number;
    removeArgument(arg0: number): Particle$ParticleData<T>;
    set<T extends Object | number | string | boolean>(arg0: number, arg1: Type<T>, arg2: T): void;
    setId(arg0: number): void;
    toString(): string;
}