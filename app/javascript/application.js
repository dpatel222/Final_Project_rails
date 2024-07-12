// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
//= require jquery
//= require jquery_ujs
import { Turbo } from "@hotwired/turbo-rails";
import { Rails } from "@rails/request.js";

Turbo.start();
Rails.start();
