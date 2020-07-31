(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['github-activity.hbs'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li>\n      <span class=\"octicon mega-octicon octicon-"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"octicon") : stack1), depth0))
    + "\"></span>\n      <div class=\"heading\">\n        <span title=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"created_at") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"created_at_from_now") : stack1), depth0))
    + "</span> in the <a href=\"https://github.com/"
    + alias2(alias1(((stack1 = ((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"repo") : stack1)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"repo") : stack1)) != null ? lookupProperty(stack1,"shortName") : stack1), depth0))
    + "</a> repo\n      </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"isPullRequestEvent") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":8,"column":6},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"isIssueCommentevent") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":6},"end":{"line":13,"column":13}}})) != null ? stack1 : "")
    + "    </li>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <img src=\""
    + alias2(alias1(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"actor") : stack1)) != null ? lookupProperty(stack1,"avatar_url") : stack1), depth0))
    + "s=60\" height=\"30\" alt=\""
    + alias2(alias1(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"actor") : stack1)) != null ? lookupProperty(stack1,"login") : stack1), depth0))
    + "\" style=\"clear: both;\"> <a href=\"https://github.com/"
    + alias2(alias1(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"actor") : stack1)) != null ? lookupProperty(stack1,"login") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"actor") : stack1)) != null ? lookupProperty(stack1,"login") : stack1), depth0))
    + "</a> "
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"action") : stack1), depth0))
    + " pull request <a href=\""
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\">#"
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"pullRequestNumber") : stack1), depth0))
    + ": "
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"pullRequestTitle") : stack1), depth0))
    + "</a>.\n";
},"4":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <img src=\""
    + alias2(alias1(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"actor") : stack1)) != null ? lookupProperty(stack1,"avatar_url") : stack1), depth0))
    + "s=60\" height=\"30\" alt=\""
    + alias2(alias1(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"actor") : stack1)) != null ? lookupProperty(stack1,"login") : stack1), depth0))
    + "\" style=\"clear: both;\"> <a href=\"https://github.com/"
    + alias2(alias1(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"actor") : stack1)) != null ? lookupProperty(stack1,"login") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"actor") : stack1)) != null ? lookupProperty(stack1,"login") : stack1), depth0))
    + "</a> commented on <a href=\""
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\">#"
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"issueNumber") : stack1), depth0))
    + ": "
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"issueTitle") : stack1), depth0))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class=\"github-activity\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"events") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":2,"column":2},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true,"useBlockParams":true});
})();