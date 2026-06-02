import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { BooleanSupplier } from '../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScriptAsyncUtil$TickScheduler } from '../../../../../../net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil$TickScheduler.d.ts'
import type { Request$Builder } from '../../../../../../okhttp3/Request$Builder.d.ts'
import type { Value } from '../../../../../../org/graalvm/polyglot/Value.d.ts'
/**
 * Async utils including game-based tick scheduling and network requests.
 * JavaScript-only.
 *
 * @author MukjepScarlet
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt:41}
 */
export class ScriptAsyncUtil extends Object {
    static TickScheduler: ScriptAsyncUtil$TickScheduler;
    constructor(jsPromiseConstructor: Value)
    // private defaultPromise: Value;
    // private jsPromiseConstructor: Value;
    /**
     * Example: `const result = await conditional(20, () => mc.player.isOnGround())`
     *
     * @returns `Promise<number>`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt#L151 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt:151}
     */
    conditional(ticks: number, breakLoop: () => kotlin.Boolean): Value;
    /**
     * Starts an async task on {@link executor}, returns a `Promise`.
     * JS `Promise` result will be resolved or rejected on Render thread.
     * You can use utils from {@link java.util.concurrent} to control your tasks.
     *
     * @returns `Promise<T>`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt#L185 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt:185}
     */
    launch(executor: Executor, block: () => T): Value;
    launch(block: () => T): Value;
    /**
     * Sends an HTTP request or websocket request asynchronously. (based on {@link okhttp3})
     * JS `Promise` result will be resolved or rejected on Render thread.
     *
     * Example: `const result = await request(builder => builder.url('http://localhost:15000'))`
     *
     * @returns `Promise<okhttp3.Response>`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt#L169 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt:169}
     */
    request(block: (param0: Request$Builder) => void): Value;
    /**
     * Example: `await ticks(10)`
     *
     * @returns `Promise<number>`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt:106}
     */
    ticks(n: number): Value;
    /**
     * Example: `const duration = await until(() => mc.player.isOnGround())`
     *
     * @returns `Promise<number>`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt#L121 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt:121}
     */
    until(condition: () => kotlin.Boolean): Value;
}