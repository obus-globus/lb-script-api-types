import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { ConfigLoader } from '../../../../io/ktor/server/config/ConfigLoader.d.ts'
import type { ConfigLoader$Companion } from '../../../../io/ktor/server/config/ConfigLoader$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HoconConfigLoader extends Object implements ConfigLoader {
    static Companion: ConfigLoader$Companion;
    constructor()
    load(path: string | null): ApplicationConfig | null;
}