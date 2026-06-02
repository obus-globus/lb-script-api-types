import type { TypeToken } from '../../../../com/google/common/reflect/TypeToken.d.ts'
import type { Cartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Cartesian$Mu.d.ts'
import type { Profunctor$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Profunctor$Mu.d.ts'
import type { ReCocartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/ReCocartesian$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Forget$Instance$Mu<R extends Object | number | string | boolean> extends Object implements Cartesian$Mu, ReCocartesian$Mu {
    static TYPE_TOKEN: TypeToken<Cartesian$Mu>;
    static TYPE_TOKEN: TypeToken<Profunctor$Mu>;
    constructor()
}