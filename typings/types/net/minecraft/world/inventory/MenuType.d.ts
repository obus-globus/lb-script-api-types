import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { AnvilMenu } from '../../../../net/minecraft/world/inventory/AnvilMenu.d.ts'
import type { BeaconMenu } from '../../../../net/minecraft/world/inventory/BeaconMenu.d.ts'
import type { BlastFurnaceMenu } from '../../../../net/minecraft/world/inventory/BlastFurnaceMenu.d.ts'
import type { BrewingStandMenu } from '../../../../net/minecraft/world/inventory/BrewingStandMenu.d.ts'
import type { CartographyTableMenu } from '../../../../net/minecraft/world/inventory/CartographyTableMenu.d.ts'
import type { ChestMenu } from '../../../../net/minecraft/world/inventory/ChestMenu.d.ts'
import type { CrafterMenu } from '../../../../net/minecraft/world/inventory/CrafterMenu.d.ts'
import type { CraftingMenu } from '../../../../net/minecraft/world/inventory/CraftingMenu.d.ts'
import type { DispenserMenu } from '../../../../net/minecraft/world/inventory/DispenserMenu.d.ts'
import type { EnchantmentMenu } from '../../../../net/minecraft/world/inventory/EnchantmentMenu.d.ts'
import type { FurnaceMenu } from '../../../../net/minecraft/world/inventory/FurnaceMenu.d.ts'
import type { GrindstoneMenu } from '../../../../net/minecraft/world/inventory/GrindstoneMenu.d.ts'
import type { HopperMenu } from '../../../../net/minecraft/world/inventory/HopperMenu.d.ts'
import type { LecternMenu } from '../../../../net/minecraft/world/inventory/LecternMenu.d.ts'
import type { LoomMenu } from '../../../../net/minecraft/world/inventory/LoomMenu.d.ts'
import type { MenuType$MenuSupplier } from '../../../../net/minecraft/world/inventory/MenuType$MenuSupplier.d.ts'
import type { MerchantMenu } from '../../../../net/minecraft/world/inventory/MerchantMenu.d.ts'
import type { ShulkerBoxMenu } from '../../../../net/minecraft/world/inventory/ShulkerBoxMenu.d.ts'
import type { SmithingMenu } from '../../../../net/minecraft/world/inventory/SmithingMenu.d.ts'
import type { SmokerMenu } from '../../../../net/minecraft/world/inventory/SmokerMenu.d.ts'
import type { StonecutterMenu } from '../../../../net/minecraft/world/inventory/StonecutterMenu.d.ts'
export class MenuType<T extends AbstractContainerMenu> extends Object implements FeatureElement {
    static ANVIL: MenuType<AnvilMenu>;
    static BEACON: MenuType<BeaconMenu>;
    static BLAST_FURNACE: MenuType<BlastFurnaceMenu>;
    static BREWING_STAND: MenuType<BrewingStandMenu>;
    static CARTOGRAPHY_TABLE: MenuType<CartographyTableMenu>;
    static CRAFTER_3x3: MenuType<CrafterMenu>;
    static CRAFTING: MenuType<CraftingMenu>;
    static ENCHANTMENT: MenuType<EnchantmentMenu>;
    static FILTERED_REGISTRIES: ResourceKey<FeatureElement[]>[];
    static FURNACE: MenuType<FurnaceMenu>;
    static GENERIC_3x3: MenuType<DispenserMenu>;
    static GENERIC_9x1: MenuType<ChestMenu>;
    static GENERIC_9x2: MenuType<ChestMenu>;
    static GENERIC_9x3: MenuType<ChestMenu>;
    static GENERIC_9x4: MenuType<ChestMenu>;
    static GENERIC_9x5: MenuType<ChestMenu>;
    static GENERIC_9x6: MenuType<ChestMenu>;
    static GRINDSTONE: MenuType<GrindstoneMenu>;
    static HOPPER: MenuType<HopperMenu>;
    static LECTERN: MenuType<LecternMenu>;
    static LOOM: MenuType<LoomMenu>;
    static MERCHANT: MenuType<MerchantMenu>;
    static SHULKER_BOX: MenuType<ShulkerBoxMenu>;
    static SMITHING: MenuType<SmithingMenu>;
    static SMOKER: MenuType<SmokerMenu>;
    static STONECUTTER: MenuType<StonecutterMenu>;
    constructor(constructor: MenuType$MenuSupplier<T>, requiredFeatures: FeatureFlagSet)
    // private constructor: MenuType$MenuSupplier<T>;
    // private requiredFeatures: FeatureFlagSet;
    create(containerId: number, inventory: (Object | null)[]): T;
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    requiredFeatures(): FeatureFlagSet;
}