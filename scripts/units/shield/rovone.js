const rovone = extendContent(UnitType, "rovone", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

rovone.abilities.add(new ForceFieldAbility(40, 0.4, 200, 30 * 5));

rovone.constructor = () => {
    const unit = extend(BuilderMinerUnit, {})

    return unit
}