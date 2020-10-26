const orcus = extendContent(UnitType, "orcus", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

orcus.abilities.add(new ForceFieldAbility(60, 0.6, 400, 40 * 5));

orcus.constructor = () => {
    const unit = extend(BuilderMinerPayloadUnit, {})
	
    return unit
}