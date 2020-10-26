const superbia = extendContent(UnitType, "superbia", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

superbia.abilities.add(new ForceFieldAbility(80, 0.8, 1000, 50 * 6));

superbia.constructor = () => {
    const unit = extend(BuilderMinerPayloadUnit, {})
	
	return unit}