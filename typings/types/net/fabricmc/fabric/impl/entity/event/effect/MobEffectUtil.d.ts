import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EffectEventContext } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/effect/EffectEventContext.d.ts'
export class MobEffectUtil extends Object {
    static getCommandContext(): EffectEventContext;
    static popContext(): void;
    static pushContext(paramarg0: EffectEventContext): void;
    private constructor()
}