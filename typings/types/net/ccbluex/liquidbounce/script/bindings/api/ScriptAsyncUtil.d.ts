import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { BooleanSupplier } from '../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScriptAsyncUtil$TickScheduler } from '../../../../../../net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil$TickScheduler.d.ts'
import type { Request$Builder } from '../../../../../../okhttp3/Request$Builder.d.ts'
import type { Value } from '../../../../../../org/graalvm/polyglot/Value.d.ts'
import type { Response } from '../../../../../../okhttp3/Response.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
/**
 * Async utils including game-based tick scheduling and network requests.
 * JavaScript-only.
 *
 * @author MukjepScarlet
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt:47}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt#L156 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt:156}
     */
    /**
     * Bridges a Java {@link CompletableFuture} to a JS `Promise`, resolved
     * or rejected on the render thread. (Runtime: @JvmName extension.)
     */
    completableFutureToPromise<T>(future: CompletableFuture<T>): Promise<T>;
    conditional(ticks: number, breakLoop: () => boolean): Promise<number>;
    /**
     * Starts an async task on {@link executor}, returns a `Promise`.
     * JS `Promise` result will be resolved or rejected on Render thread.
     * You can use utils from {@link java.util.concurrent} to control your tasks.
     *
     * @returns `Promise<T>`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt#L192 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt:192}
     */
    launch<T extends unknown>(executor: Executor, block: () => T): Promise<T>;
    launch<T extends unknown>(block: () => T): Promise<T>;
    /**
     * Sends an HTTP request or websocket request asynchronously. (based on {@link okhttp3})
     * JS `Promise` result will be resolved or rejected on Render thread.
     *
     * Example: `const result = await request(builder => builder.url('http://localhost:15000'))`
     *
     * @returns `Promise<okhttp3.Response>`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt#L177 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt:177}
     */
    request(block: (param0: Request$Builder) => void): Promise<Response>;
    /**
     * Example: `await ticks(10)`
     *
     * @returns `Promise<number>`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt#L111 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt:111}
     */
    ticks(n: number): Promise<number>;
    /**
     * Example: `const duration = await until(() => mc.player.isOnGround())`
     *
     * @returns `Promise<number>`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt#L126 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.kt:126}
     */
    until(condition: () => boolean): Promise<number>;
}