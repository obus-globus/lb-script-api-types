import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MinecraftAccountKt extends Object {
    /**
     * Client token of every session we create. Randomised per launch, which is what the protocol expects
     * from a client that does not persist one.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt:38}
     */
    static getClientIdentifier(): string;
}