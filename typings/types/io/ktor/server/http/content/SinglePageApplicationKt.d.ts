import type { SPAConfig } from '../../../../../io/ktor/server/http/content/SPAConfig.d.ts'
import type { Route } from '../../../../../io/ktor/server/routing/Route.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SinglePageApplicationKt extends Object {
    static angular(self: SPAConfig, filesPath: string): void;
    static backbone(self: SPAConfig, filesPath: string): void;
    static ember(self: SPAConfig, filesPath: string): void;
    static ignoreFiles(self: SPAConfig, block: (param0: string) => boolean): void;
    static react(self: SPAConfig, filesPath: string): void;
    static singlePageApplication(self: Route, configBuilder: (param0: SPAConfig) => void): void;
    static vue(self: SPAConfig, filesPath: string): void;
}