import type { JacksonFeature } from '../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeature.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface FormatFeature extends JacksonFeature, Object{
    enabledByDefault(): boolean;
    enabledIn(arg0: number): boolean;
    getMask(): number;
}