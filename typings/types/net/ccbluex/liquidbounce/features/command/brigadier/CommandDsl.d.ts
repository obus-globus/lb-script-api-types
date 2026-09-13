import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Marker annotation preventing nested DSL scopes from calling members of outer scopes
 * (e.g. attaching arguments to a parent literal from inside a handler block).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:78}
 */
export interface CommandDsl extends Annotation, Object{
}