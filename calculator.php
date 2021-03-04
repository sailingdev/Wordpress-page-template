<?php
/**
 * Template Name: Calculator Template
 * Template Post Type: post, page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header();
wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', array(), null, true);
wp_enqueue_style('calculator', get_template_directory_uri().'/templates/calculator.css', false, 1.1, 'all');
?>
<div id="av_section_1" class="avia-section alternate_color avia-section-default avia-no-shadow  avia-bg-style-scroll  avia-builder-el-0  el_before_av_section  avia-builder-el-first   av-arrow-down-section container_wrap fullsize" style=" "><div class="container"><main role="main" itemprop="mainContentOfPage" class="template-page content  av-content-full alpha units"><div class="post-entry post-entry-type-page post-entry-633"><div class="entry-content-wrapper clearfix">
<div class="flex_column av_one_full  flex_column_div av-zero-column-padding first  avia-builder-el-1  avia-builder-el-no-sibling  " style="border-radius:0px; "><div style="padding-bottom:10px; font-size:55px;" class="av-special-heading av-special-heading-h1  blockquote modern-quote modern-centered  avia-builder-el-2  avia-builder-el-no-sibling  av-inherit-size "><h1 class="av-special-heading-tag " itemprop="headline">FORAGE FEEDING CALCULATOR</h1><div class="av-subheading av-subheading_below  " style="font-size:15px;"><p>Welcome to the Trickle Net Forage Feeding calculator.<br> Fill in the boxes below to calculate how much forage your horse requires and find out if you could be saving money.</p>
</div><div class="special-heading-border"><div class="special-heading-inner-border"></div></div></div></div>

</div></div></main><!-- close content main element --></div><div class="av-extra-border-element border-extra-arrow-down"><div class="av-extra-border-outer"><div class="av-extra-border-inner" style="background-color:#1a8649;"></div></div></div></div>

<main id="site-content" role="main">

  <div class="calc_container center mt-2 mb-13">      
	 
    <div class="center" style="max-width: 901px;">
        <table class="center calc_tbl">
            <tr><th class="th-width"></th><th></th></tr>    
            <tr>
                    <td>
                        <h5>Curent Horse's Weight(kg)</h3>
                    </td>
                    <td>
                        <input class="calc_input" id="H10" type="number"  value="0" min="0"/>
                    </td>
                </tr>
                <tr>
                    <td >
                        <h5>Ideal Horse's Weight(kg)</h5>
                    </td>
                    <td>
                        <input class="calc_input" id="H12" type="number" value="0" min="0"/>
                    </td>
                </tr>
                <tr>
                    <td >
                        <h5>Are you feeding for weightloss, maintenance or underweight?</h5>
                    </td>
                    <td>
						<select class="calc_select" id="H14">
                            <option value="1">Weightloss</option>
                            <option value="2">Maintenance</option>
                            <option value="3">UnderWeight</option>
                        </select>	
                    </td>
                </tr>
                <tr>
                    <td >
                        <h5>How much hay you currently feed per day (KG)</h5>
                    </td>
                    <td>
                        <input class="calc_input" id="H16" type="number" value="0" min="0"/>
                    </td>
                </tr>
                <tr>
                   <td>
                       <h5>Do you buy hay in standard small or large round bales?</h5>
                   </td> 
                   <td>
                    <select class="calc_select" id="H18">
                        <option value="1">Standard Small Bale</option>
                        <option value="2">Large Round Bale</option>
                    </select>
                   </td>
                </tr>
                <tr>
                    <td><h5>How much do you pay for the bale?(£)</h5></td>
                    <td>
                        <input class="calc_input" id="H20" type="number" value="0" min="0"/>
                    </td>
                </tr>                
        </table>
        <a href="javascript:printor('<?php echo get_template_directory_uri(); ?>/templates');" class="avia-button   avia-icon_select-no avia-size-large avia-position-right " style="background-color:#1a8649; border-color:#1a8649; color:#ffffff; "><span class="avia_iconbox_title">PRINT</span></a>
        <a href="javascript:calculator();" class="mr-1 avia-button   avia-icon_select-no avia-size-large avia-position-right " style="background-color:#1a8649; border-color:#1a8649; color:#ffffff; "><span class="avia_iconbox_title">CALCULATE</span></a>
    </div>
        
        <div id="section_1">
        </div>
        <div id="section_2">     
        </div>
        <div id="section_3">        
        </div>
        <div class="center" style="max-width: 901px;">
            <table id="section_4">
            </table>
        </div>
</div>

</main><!-- #site-content -->

<?php  wp_enqueue_script('calculator', get_template_directory_uri().'/templates/calculator.js', array(),'1.0.0', true ); ?>
<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>

<?php get_footer(); ?>