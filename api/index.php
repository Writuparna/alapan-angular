<?php

class Index extends CI_Controller {
	
	
	//load all the pages into this variable so we can call it from all the methods
	var $pages = '';
	
	
	
	var $header_text;

	function __construct()
	{
		parent::__construct();
		
		//make sure we're not always behind ssl
		remove_ssl();
		
		$this->load->library('Go_cart');
		$this->load->library('Email');
		$this->load->model(array( 'Page_model','Banner_model','Programme_model','Cd_model','Testimonial_model','Video_model','Homebanner_model'));
		$this->load->helper(array('form_helper', 'formatting_helper'));
		
		
		//load the theme package
		$this->load->add_package_path(APPPATH.'themes/'.$this->config->item('theme').'/');
		
	}

	function index()
	{
		
		$data['homepage']			= true;
		$data['welcome'] = $this->Page_model->get_page(1);
		$data['about_owner'] = $this->Page_model->get_page(2);
		$data['programme'] = $this->Programme_model->get_homepage_programmes(4);
		$data['cd_evnt'] = $this->Cd_model->get_homepage_programmes(1);	
        $data['testimonials'] =  $this->Testimonial_model->get_programmes();
		$data['videos'] =  $this->Video_model->get_homepage_programmes(2);
		$data['home_banners'] =  $this->Homebanner_model->get_banners();
		$data['nav_select'] ="home";
		$this->load->view('homepage', $data);
	}
	
	 function videos(){
		$data['page_title']			= "Videos";
		
		$data['meta']				= "Videos";
		$data['seo_title']			= "Videos";
		$data['nav_select'] ='';
		$data['videos'] =  $this->Video_model->get_programmes();
		
	 $this->load->view('videos', $data);
	 }

	function page($id)
	{
		
		$data['page']				= $this->Page_model->get_page($id);
		

		$data['page_title']			= $data['page']->title;
		
		$data['meta']				= $data['page']->meta;
		$data['seo_title']			= $data['page']->seo_title;
		$data['nav_select'] ='about_us';
		
		
		
		$this->load->view('page', $data);
	}
    
	function events()
	{
		
		$data['programme'] = $this->Programme_model->get_programmes();
		
		$data['meta']				= "Recent Programmes";
		$data['seo_title']			= "Recent Programmes";
		$data['nav_select'] ='event';
		
		
		$this->load->view('events', $data);
	}

	
	function released_cd(){
		
		$data['cds'] = $this->Cd_model->get_programmes();
		$data['meta']				= "Released Cds";
		$data['seo_title']			= "Released Cds";
		$data['nav_select'] ='event';
		$this->load->view('cds', $data);
	
	}
	function gallery()
	{
		
		$data['gallery'] = $this->Banner_model->get_banners();
		
		$data['meta']				= "Gallery";
		
		$data['nav_select'] ='gallery';
		
		
		$this->load->view('gallery', $data);
	}
    
	function cd_release()
	{
		
		$data['cds'] = $this->Cd_model->get_programmes();
		
		$data['meta']				= "Released Cd";
		
		$data['nav_select'] ='';
		
		
		$this->load->view('cds', $data);
	}
    
	function testimonial($id=false){
	
		$data['testimonial'] = $this->Testimonial_model->get_programme($id);
		
		$data['meta']				= "Testimonial Details";
		
		$data['nav_select'] ='';
		
		$this->load->view('testimonial', $data);
	
	}
	function contact_us(){
		$data=array();
		$data['meta']				= "Contact Us";
		$data['seo_title']			= "Contact Us";
		$data['nav_select'] ='contact';
		if(isset($_POST) && !empty($_POST)){
		
		$config['mailtype'] ="html";
		$this->email->initialize($config);
		$result=$_POST;
		  $mail_body_title="########### Customer Query ###########";
			// Sending Email
			

			$toemail		= $this->config->item('toemail');
			$Store_name		= $this->config->item('company_name');
			
			$this->email->from('noreply@alapanabritteesangstha.com', $this->input->post('Name'));
			//$this->email->to($toemail);
			$this->email->to('abrittee.alapan@gmail.com');
			//$this->email->cc('ccname@domain.com');
			//$this->email->bcc('them@their-example.com');
			$this->email->subject('Enquery Request : '.$Store_name);
			//echo $toemail.'<br>'.$d;
			
			$fields=array('Name','Address','City','Country','Telephone','E-Mail','Comments');
	
	$val=array();
	$l=0;  
	$msg="";
	foreach($result as $key=>$value)
	{
		if($key!="action")
		{
			$val[$l]=stripcslashes($value);
			$l++;
		}
	}	
	/////////////////////// CUSTOMER DATA //////////////////////

	////////////////////////  EMAIL BODY ///////////////////////
	$body = "<table><tr><td colspan='3'>".$mail_body_title."</td></tr><tr><td colspan='3'>&nbsp;</td></tr>";
	$i=0;
	foreach($fields as $in=>$title)
	{
		$body.="<tr><td>".$title."</td><td width='2%'>:</td><td>".$val[$i]."</td></tr>";
		$i++;
	}
	$body.="</table>";

			
			$messageBody		=	$body;
			//redirect(base_url().'thank-you');
			//die($messageBody);
			$this->email->message($messageBody);
          
			if($this->email->send()){
			$this->session->set_flashdata('success','Your Message is Sent to us We will Contact You Shortly');
			redirect(base_url().'contactus');
			}
			else{
			$this->session->set_flashdata('error','Your Message Failed to sent please try again');
			redirect(base_url().'contactus');
			}
		
	  }
	  
	  $this->load->view('contact_us',$data);
	}
	
	}