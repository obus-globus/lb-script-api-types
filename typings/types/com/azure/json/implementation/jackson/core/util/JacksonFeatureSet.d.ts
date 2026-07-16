import type { JacksonFeature } from '../../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeature.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JacksonFeatureSet<F extends JacksonFeature> extends Object {
    static fromDefaults<F extends JacksonFeature>(paramarg0: F[]): JacksonFeatureSet<F>;
    private constructor(arg0: number)
    // private _enabled: number;
    isEnabled(arg0: F): boolean;
    with(arg0: F): JacksonFeatureSet<F>;
    without(arg0: F): JacksonFeatureSet<F>;
}