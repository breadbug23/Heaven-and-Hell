const ose = extendContent(UnitType, "ose", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

ose.abilities.add(new ForceFieldAbility(20, 0.3, 100, 20 * 3));

ose.constructor = () => {
    const unit = extend(MinerUnit, {})

    return unit
}