task :default do
  sh './node_modules/.bin/handlebars _handlebars_templates/github-activity.hbs -f js/templates/github-activity.tpl.js' || fail('Failed to compile Handlebars template')
end
