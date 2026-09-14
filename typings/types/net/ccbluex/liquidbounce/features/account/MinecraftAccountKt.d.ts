import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MinecraftAccountKt extends Object {
    /**
     * Client token of every session we create. Randomised per launch, which is what the protocol expects
     * from a client that does not persist one.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt:38}
     */
    static getClientIdentifier(): string;
}